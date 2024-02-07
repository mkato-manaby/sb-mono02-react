const Form = (props) => {
    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)} />
            <button type="submit" onClick={props.getWeather}>Get Weahter</button>
        </form>
    );
};

export default Form;