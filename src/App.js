import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decreament, decreaseAmount, increament, increaseAmount } from './Redux/Slices/counterSlice';

function App() {
  const data = [
    {
      name: "akshay",
      age: 23
    },
    {
      name: "ajay",
      age: 22
    },
    {
      name: "abhay",
      age: 21
    },
    {
      name: "sushant",
      age: 20
    }
  ]
  const counter = useSelector(state => state?.counter)
  const dispatch = useDispatch()
  const [myfile, setMyfile] = useState('')
  const [url, setUrl] = useState('')
  const [arr, setArray] = useState([])

  const imageFormator = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        resolve(reader.result)
      }
    })
  }

  const handleChange = async () => {
    const final = await imageFormator(myfile)
    setArray([...arr, final])
  }

  const deleteImage = (idx) => {
    const filterData = arr.filter((element, index) => {
      return index !== idx;
    });
    setArray(filterData);
  }
  return (
    <div className="App">
      <h1>lsjjs</h1>
      <input type="file" name="" id="" onChange={(e) => { setMyfile(e.target.files[0]) }} />
      <button onClick={handleChange}>add image to bucket</button>
      {
        arr.map((val, idx) => {
          return (
            <div>
              <img src={val} alt="" />
              <button onClick={() => { deleteImage(idx) }}>delet me</button>
            </div>
          )
        })
      }

      {/* 
      <div className="database">
        {
          counter.value.map((val, idx) => {
            return (
              <h1 className='myname'>{val.name}</h1>
            )
          })
        }

      </div>
      <div>
        {data.map((val, idx) => {
          return (
            <div>
              <h1>{val.name}</h1>
              <h1>{val.age}</h1>
              <button onClick={() => { dispatch(increament(val)) }}>+</button>

            </div>
          )
        })}
      </div> */}

      {/* <button onClick={() => { dispatch(increament()) }}>+</button>
      <button onClick={() => { dispatch(decreament()) }}>-</button>
      <button onClick={() => { dispatch(increaseAmount(5)) }}>Increase Amount</button>
      <button onClick={() => { dispatch(decreaseAmount(5)) }}>decrease Amount</button> */}

    </div>
  );
}

export default App;
