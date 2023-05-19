import "./Button.css"

export const Button = ({ text, clickReset }) => {
    return (
        <button className="button" onClick={() => clickReset({clickReset})}>
            {text} 
        </button>
    )
};