import pdf from "../images/sol_moon.pdf";

export default function Pdf() {
    return (
        <div>
            <iframe src={pdf} width={"100%"} height={"500px"} />                
        </div>
    )
}