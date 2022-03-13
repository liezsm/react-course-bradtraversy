import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [val, setValue] = useState([
    {
      text: "",
      time: "",
      reminder: "",
    },
  ]);
  const handleChange = (e) => {
    
    const {  value } = e.target;
    setValue([{ ...val, e.target.name: value }]);
  };
  console.log(val);
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task:</label>
        <input
          type='text'
          placeholder='Add task...'
          name='text'
          value={value.text}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className='form-control'>
        <label>Day and time:</label>
        <input
          type='text'
          placeholder='Add day and time...'
          name='time'
          value={value.time}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className='form-control form-control-check'>
        Set reminder
        <input
          type='checkbox'
          //   name='reminder'
          //   value={value.reminder}
          //   onChange={(e) => handleChange(e)}
        />
      </div>

      <input
        type='submit'
        value='Save Task'
        className='btn btn-block'
        onSubmit={() => addTask()}
      />
    </form>
  );
};

export default AddTask;
