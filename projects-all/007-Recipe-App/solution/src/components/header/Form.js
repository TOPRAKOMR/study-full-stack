import React from 'react'

const Form = () => {
  return (
    <div>
        <form >
        <input type="text" name="name" placeholder='Search' />
        <input type="submit" value="Gönder" />
        <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
        </form>


    </div>
  )
}

export default Form