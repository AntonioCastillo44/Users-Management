import React from 'react'

const UsersForm = ({register, handleSubmit, submit, userUpdate, handleChangeModal, setUserUpdate}) => {
    const handleCloseModal = () => {
        handleChangeModal()
        setUserUpdate()
    } 

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <i onClick={handleCloseModal} class='form__x bx bx-x'></i>
                <h1 className='form__h1' >{userUpdate?"Edit User":"New user"}</h1>
        <div className='form__div'> 
            <label className='form__label' c html="">Email</label>
            <input className='form__input' placeholder='Enter your email' type='email'{...register("email")} />
        </div>
        <div className='form__div'> 
            <label className='form__label' html="">Password</label>
            <input className='form__input' placeholder='Enter your password' type='password'{...register("password")} />
        </div>
        <div className='form__div'> 
            <label className='form__label' html="">First name</label>
            <input className='form__input' placeholder='Enter your first name' type='text'{...register("first_name")} />
        </div>
        <div className='form__div'> 
            <label className='form__label' html="">Last name</label>
            <input className='form__input' placeholder='Enter your last name' type='text'{...register("last_name")} />
        </div>
        <div className='form__div'> 
            <label className='form__label' html="">Birthday</label>
            <input className='form__input' type='date'{...register("birthday")} />
        </div>
        <button className='form__btn' > Save Changes </button>
    </form>
    
  )
}

export default UsersForm