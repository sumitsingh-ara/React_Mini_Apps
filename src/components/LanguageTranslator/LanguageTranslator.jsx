import { useState, useEffect } from "react";
import { LanguageInput } from "./LanguageInput";
import { debounce } from "../../utilis/debounce";
export const LanguageTranslator = () => {
  const [value, setValue] = useState("");
  const [data,setData] = useState("")
  const [loading, setLoading] = useState(true);
  const [options, setOpns] = useState([]);
  const [from, setFrom] = useState({
    from: "",
    name: null,
  });
  const [to, setTo] = useState({
    to: "",
    name: null,
  });
  useEffect(() => {
    if (!value.trim() || !from.from || !to.to ){
      return;
    }
    const fetchData = () => {
      setLoading(true);
      var myHeaders = new Headers();
      console.log(myHeaders);
      myHeaders.append("Content-Type", "application/json");
      console.log(myHeaders);
      let raw = JSON.stringify({
        "q": value,
        "source": from.from,
        "target": to.to
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://libretranslate.de/translate", requestOptions)
        .then(response => response.json())
        .then(result => setData(result.translatedText)).then(()=> setLoading(false))
        .catch(error => alert('error', error.message));
    }
    debounce(fetchData,1000);
  }, [value,from,to,]);

  useEffect(() => {
    setLoading(true);
    const setOptions = async () => {
      try {
        let data = await fetch("https://libretranslate.de/languages");
        data = await data.json();
        setOpns(data);
        setLoading(false);
      } catch (err) {
        let text = `Something went wrong please refresh \n${err.message}`;
        alert(text);
        return;
      }
    };
    setOptions();
  }, []);

  return (
    <>
      <div>
        {!loading ? (
          <select className="btn btn-warning btn-sm"
            value={from.from}
            onChange={(ev) => {
              options.filter((e) => {
                if (e.code === ev.target.value) {
                  setFrom({
                    from: e.code,
                    name: e.name,
                  });
                }
                return e;
              });
            }}
          >
            <option value="" defaultValue disabled>
              Choose Language
            </option>
            {options.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        ) : (
          <img
            alt="Loading.."
            style={{ width: "1.2%" }}
            src="https://i.gifer.com/ZZ5H.gif"
          ></img>
        )}
        <span> To </span>
        {!loading ? (
          <select className="btn btn-warning btn-sm"
            value={to.to}
            onChange={(ev) => {
              options.filter((e) => {
                if (e.code === ev.target.value) {
                  setTo({
                    to: e.code,
                    name: e.name,
                  });
                }
                return e;
              });
            }}
          >
            <option value="" defaultValue disabled>
              Choose Language
            </option>
            {options.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        ) : (
          <img
            alt="Loading.."
            style={{ width: "1.2%" }}
            src="https://i.gifer.com/ZZ5H.gif"
          ></img>
        )}
      </div>
      <LanguageInput value={value} loading={loading} from={from} to={to} data={data} setData={setData} setValue={setValue} />
    </>
  );
};
