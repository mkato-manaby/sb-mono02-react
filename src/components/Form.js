const Form = ({ city, setCity, getWeather }) => {
    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="英語で都市名を入力" onChange={e => setCity(e.target.value)} value={city} />
            <button type="submit">Get Weahter</button>
        </form>
    );
};

export default Form;
