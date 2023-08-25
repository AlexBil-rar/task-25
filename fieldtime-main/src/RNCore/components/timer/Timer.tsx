import React from "react"
import {Col1, Row} from "../../../RNCore/components/markup/markup";
import {TextInput, TextInputFocusEventData, } from "react-native";
import BackIcon from "../icons/BackIcon";
import NextIcon from "../icons/NextIcon";
import tw from "../../../../src/RNCore/libs/tailwind";


const Timer = () => {
    const [time, setTime] = React.useState<string>("")
    const [blur, setBlure]= React.useState<boolean>()
    const [start, setStart] = React.useState<number>(Number)

      const onBlur = () => {
        if(Number(time)) {
        let times = toHHMM(Number(time));
        setTime(times.join(":").toString());
        setStart(Number(times.join("")))
        setBlure(true)
        }
      };

      const onFocus = () => {
        setBlure(false)
        setTime(time?.replace(/\:/, ""))
      };

      React.useMemo(() => {
        let idInterval = setInterval(()=> {
        if(blur) {
        let times = toHHMM(Number(start)- 1 );
            setTime(times.join(":"));
            setStart(start - 1)
            if(Math.trunc(start % 100) == 0)  {
                setStart(start - 41)
            }
            if(!start) {
                setTime("00:00")
                setStart(start! + 0 )
                setBlure(false)
            }
        }
        }, 60*1000)
        return () => clearInterval(idInterval)
      },[time,blur,start])

      const toHHMM = (time: number) => {
        let min = Number(time) % 100; min = Math.trunc(min)
        let hh = (Number(time) / 100) % 100; hh = Math.trunc(hh)
        if(min > 59) {
            min = 59
        } 
          if(hh > 23) {
            hh = 23
        }
        return [ hh, min]
          .map((val) => (val < 10 ? `0${val}` : val))
          .filter((val, index) => val == "00" ||val !== "00"  || index > 0)
    }
    return(
        <>
        <Row class={'justify-center'}>
            <TextInput
            placeholder="--:--"
            style={tw`h-14 text-xl w-32 pl-9.9 mt-2 bg-success font-medium border-transparent rounded`}
            onChange={(e: React.BaseSyntheticEvent<TextInputFocusEventData> ) => setTime(e.target.value)} 
            value={time}
            maxLength={4}
            onFocus={onFocus}
            onBlur={onBlur}
            />
        </Row>
        <Row class={"mt-2  mb-10 justify-center"} >
            <button onClick={() => setStart(start + 100)}
                style={tw`mr-5 bg-transparent border border-blue-500 hover:border-transparent rounded`}>
                <NextIcon/>
            </button>
            <button onClick={() => setStart(start - 100)}
            style={tw`bg-transparent border border-blue-500 hover:border-transparent rounded`}>
                <BackIcon/>
            </button>
        </Row>





        <TextInput
        placeholder="--:--"
        style={tw`h-9 w-25  text-white pl-3 mt-2 bg-primary font-medium border-transparent rounded`}
        onChange={(e: React.BaseSyntheticEvent<TextInputFocusEventData> ) => setTime(e.target.value)} 
        value={time}
        maxLength={4}
        onFocus={onFocus}
        onBlur={onBlur}
        />
        <Row class={"mt-2 mb-10 " } >
            <button onClick={() => setStart(start + 100)}
                style={tw`mr-5 bg-transparent border border-blue-500 hover:border-transparent rounded`}>
                <NextIcon/>
            </button>
            <button onClick={() => setStart(start - 100)}
            style={tw`bg-transparent border border-blue-500 hover:border-transparent rounded`}>
                <BackIcon/>
            </button>
        </Row>





        <Row class={'justify-center'}>
            <Row class={'justify-center'}>
                <TextInput
                placeholder="--:--"
                style={tw`h-9 w-40 pl-3 text-current mt-2 bg-danger font-medium border-transparent rounded`}
                onChange={(e: React.BaseSyntheticEvent<TextInputFocusEventData> ) => setTime(e.target.value)} 
                value={time}
                maxLength={4}
                onFocus={onFocus}
                onBlur={onBlur}
                />
            </Row>
            <Col1>
                <Row class={"mt-2 ml-3"} >
                    <button onClick={() => setStart(start + 100)}
                        style={tw`mr-5 bg-transparent border border-blue-500 hover:border-transparent rounded`}>
                        <NextIcon/>
                    </button>
                    <button onClick={() => setStart(start - 100)}
                    style={tw`bg-transparent border border-blue-500 hover:border-transparent rounded`}>
                        <BackIcon/>
                    </button>
                </Row>
            </Col1>
        </Row>
            
        </>
    )
}

export default Timer