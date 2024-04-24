function Relogio() {
    var data = new Date();
    var hor = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
    var min = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()
    var seg = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()
    var Relogio = hor + ":" + min  + ":" + seg;
    return (
    <div className="Relogio">
        <p>{Relogio}</p>
    </div>
    );
}

export default Relogio;
