const DropdownItem = (props) => {
    const { item } = props;
    return (
        <li className={(item.selected ? 'active' : '')}><a href={item.href}>{item.name}</a></li>
    )
}
  
export default DropdownItem