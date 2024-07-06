export default function TabButton({children,onSelect,isSelected}){

    return(
        <li><button className={isSelected?"active":""} onClick={onSelect}>{children}</button></li>
    )
}


// export default function TabButton({children,isSelected,...props}){

//     return(
//         <li><button className={isSelected?"active":""}{...props}>{children}</button></li>
//     )
// }
//but have to make sure that the place where this component is there shouls now have onclick instead of onselect bcz sedha eventlisten hoga