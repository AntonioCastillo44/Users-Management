import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import addImg from './img/agregar.png'

function App() {
  const url = "https://users-crud.academlo.tech//users/"
  const [dataUser, setDataUser] = useState()
  const [userUpdate, setUserUpdate] = useState()
  const [modal, setModal] = useState(false)

  const readUsers = () => {
    axios.get(url)
      .then(res => setDataUser(res.data))
      .catch(err => console.log(err))
  }

  const createUsers = (data) => {
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        readUsers()
        handleChangeModal()
      })
      .catch(err => console.log(err))
  }

  const { register, handleSubmit, reset } = useForm()

  const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
  }

  const submit = (data) => {
    if (userUpdate) {
      updateUsers(userUpdate.id, data)
    } else {
      createUsers(data)
    }
    reset(defaultValues)
  }

  const deleteUsers = (id) => {
    axios.delete(`${url}${id}/`)
      .then(res => {
        console.log(res.data)
        readUsers()
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    readUsers()
  }, [])

  useEffect(() => {
    if (userUpdate) {
      reset(userUpdate)
    }
  }, [userUpdate])

  const updateUsers = (id, data) => {
    axios.patch(`${url}${id}/`, data)
      .then(res => {
        console.log(res.data)
        readUsers()
        setUserUpdate()
        handleChangeModal()
      })
      .catch(err => console.log(err))
  }

 const handleChangeModal = () =>{
  setModal(!modal)
  reset(defaultValues)
 }

  return (
    <div className="App">

      <div className='App__header'>
      <h1> CRUD Users </h1> 
      <button onClick={handleChangeModal} className='App__header__btn'><img className='div__btn__img__update' src={addImg} alt=""/> Add user </button>
      </div>
  
      <div className={`App__UsersForm ${modal && "disable-form"}`}>
        <UsersForm register={register} handleSubmit={handleSubmit} submit={submit} userUpdate={userUpdate} handleChangeModal={handleChangeModal}/>
      </div>

      <div className='App__UsersList'>
        {
          dataUser?.map(user => <UsersList key={user.id} user={user} deleteUsers={deleteUsers} setUserUpdate={setUserUpdate} userUpdate={userUpdate} handleChangeModal={handleChangeModal}/>)
        }
      </div>

    </div>
  )
}

export default App
