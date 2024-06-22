import { useState } from 'react';

function AddMore(){
    const [hobby, setHobby] = useState([''])
    const handleHobby = (event, index) => {
        console.log(index, event.target.item)
        let data = [...hobby];
        data[index][event.target] = event.target.value;
        setHobby(data);
    }
    return(
        <div className="App">
            <h1>Hobbies:</h1>
            <br/>
            {
                hobby.map((item, index) => {
                    return (<div key={index}>
                        <input 
                            name="Hobby" 
                            placeholder="Enter your Hobby"
                            onChange={event => handleHobby(event, index)}
                            value={item.name}
                        />
                        <button onClick={()=>{
                            let data = [...hobby];
                            data.splice(index, 1)
                            setHobby(data)
                        }}>DELETE</button>
                    </div>)
                })
            }
            <br/>
            <button
                onClick={()=>{
                    setHobby([...hobby, ''])
                }}>
                Add More
            </button>
        </div>
    );
}

export default AddMore;