import Button from "./Button";
export default function Hero(props) {
  return (
    <div
      className={`h-screen w-screen relative bg-fixed bg-cover ${props.img}`}
    >
      <div className="w-full h-full bg-gradient-to-r from-black from-10%"></div>
      <div className="absolute inset-0 top-1/3 -translate-y-1/4 p-20 h-max text-white leading-7 tracking-widest">
        <div className="text-7xl max-w-5xl font-Rma">{props.heading}</div>
        <br></br>
        <div className="text-lg max-w-3xl">{props.subheading}</div>
        <br></br>
        <div className="flex gap-10 justify-start">
          <Button title={props.btitle} to={props.blink}></Button>
        </div>
      </div>
    </div>
  );
}
