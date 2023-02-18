
const Searchbar = ({ filtrContact,value }) =>
{
    return (
        <div>
            
            <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces."
                        required
                        onChange={filtrContact}
                        //value={value}
                    />
        </div>
     )
}
export default Searchbar;