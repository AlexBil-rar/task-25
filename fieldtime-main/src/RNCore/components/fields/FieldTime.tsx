import {TextInput} from "react-native";
import tw from "../../libs/tailwind";

interface ITimeField {
    class?: string // tailwind classes
    value: string | null // Если не задано отображаем --:--
    onChangeText: (text: string) => void
    onChange: (time: string) => void // событие должно вызываться при снятии фокуса с компонента.
    useButtons?: boolean // если true - отображаем кнопки "<" слева и справа ">" + или - 1 час соответственно
}

export function FieldTime(props: ITimeField) {
    return <TextInput
        style={tw`${props.class || ''}`}
    />
}

