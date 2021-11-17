import axios from 'axios'
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'
import moment from "moment"

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const Graphics = () => {
  const [data,setData] = useState({
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      },
    ],
  });
  const [dataList, setDataList] = useState([]);
  const [dataPerson,setDataPerson] = useState({
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      },
    ],
  });
  const [dataTemperature,setDataTemperature] = useState({
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      },
    ],
  });
  const [dataLigth,setDataLigth] = useState({
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      },
    ],
  });
  const [labels,setLabels] = useState([]);


  const getData = async () => {
    const response = await axios.get('http://localhost:8600/data').then((res) => res).catch((err) => err);
    setDataList([...response.data])
  }

  const filterData = () => {
    const labelsAux = [];
    const dataPersonAux = [];
    const dataTemperatureAux = [];
    const dataLigthAux = [];

    dataList.forEach((item)=>{
      labelsAux.push(moment(item.register_date).format('HH:m'));
      dataPersonAux.push(item.person_number);
      dataTemperatureAux.push(item.temperature);
      dataLigthAux.push(item.ligth);
    });

    // setData({...data, labels:labelsAux, datasets: [{
    //   label: '# of people',
    //   data: dataPersonAux,
    //   fill: false,
    //   backgroundColor: 'rgb(255, 99, 132)',
    //   borderColor: 'rgba(255, 99, 132, 0.2)'
    // }] })  

    setDataPerson({...dataPerson, labels:labelsAux, datasets: [{
      label: '# of people',
      data: dataPersonAux,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)'
    }] })

    setDataTemperature({...dataTemperature, labels:labelsAux, datasets: [{
      label: 'Temperature',
      data: dataTemperatureAux,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)'
    }] })
    console.log(dataTemperature)

    setDataLigth({...dataLigth, labels:labelsAux, datasets: [{
      label: 'Ligth level',
      data: dataLigthAux,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)'
    }] })

    
    
  }


  useEffect(() => {
    getData();
  },[])

  useEffect(()=>{
    if(dataList.length>0){
      filterData();
    }
  },[dataList])



  return (

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"
    style={{
      backgroundColor: 'rgb(90,217,232)'
    }}
    >
      <div class="carousel-inner" >
        <div class="carousel-item active">
          <Line data={dataPerson} options={options} />
        </div>
        <div class="carousel-item">
          <Line data={dataLigth} options={options}/>
        </div>
        <div class="carousel-item">
          <Line data={dataTemperature} options={options} />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Graphics;