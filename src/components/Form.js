const Form = ({ city, setCity, getWeather }) => {
    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="都市名を英語入力" onChange={e => setCity(e.target.value)} value={city} />
            <button type="submit">Get Weahter</button>
        </form>
    );
};

export default Form;
