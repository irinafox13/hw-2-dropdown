import DropdownItem from './DropdownItem';

const list = [{
    name: "Profile Information",
    href: "#",
    selected: true
}, {
    name: "Change Password",
    href: "#"
}, {
    name: "Become PRO",
    href: "#"
}, {
    name: "Help",
    href: "#"
}, {
    name: "Log Out",
    href: "#"
}]

const DropdownList = () => {
    return (
        // eslint-disable-next-line array-callback-return
        list.map(item => {
            return (
                <DropdownItem item={item} />
            )
        })
    )
}
  
export default DropdownList