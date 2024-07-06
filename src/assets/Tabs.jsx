export default function Tabs({button,children,buttonsContainer}){
    const ButtonsContainer=buttonsContainer
    return(
        <>
        <ButtonsContainer>
        {button}</ButtonsContainer>
        {children}</>
    );
}