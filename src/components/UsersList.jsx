import React from 'react'
import deleteImg from '../img/eliminar.png'
import updateImg from '../img/editar.png'

const UsersList = ({user, deleteUsers, setUserUpdate, handleChangeModal}) => {

  const handleChangeClickUpdate = () => {
    setUserUpdate(user)
    handleChangeModal()
  }

  return (
    <article className='article__card'>
        <ul className='article__card__ul' >
           <li><h1> {`${user.first_name} ${user.last_name}`} </h1></li>
            <li className='article__card__li' > <span className='article__card__span'>Email</span>  <br/>{user.email}</li>
            <li className='article__card__li' > <span className='article__card__span'>Birthday</span>  <br/>{user.birthday}</li>
        </ul>
        <div className='div__btn'>
            <span className='div__btn__btn' onClick={() => deleteUsers(user.id)}> <img className='div__btn__img__delete' src={deleteImg} alt=""/> </span>
            <span className='div__btn__btn' onClick={handleChangeClickUpdate}> <img className='div__btn__img__update' src={updateImg} alt=""/> </span>
        </div>
    </article>
  )
}

export default UsersList