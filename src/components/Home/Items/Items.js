import useLoadData from '../../../hooks/useLoadData';
import Item from '../Item/Item';

const Items = () => {
    const [items]=useLoadData()
    return (
        <div className='bg-gray-100'>
            <h2 className='text-center text-4xl py-5'>Car Collection</h2>
            <div className='container md:grid grid-cols-3 gap-4 w-fit mx-auto p-12'>
            {
                items.slice(0,6).map(item=><Item key={item._id} item={item}></Item>)
            }
            </div>
            
        </div>
    );
};

export default Items;