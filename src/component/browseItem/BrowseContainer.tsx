
'use client'
import { Item } from '@/lib/tsType';
import BrowseCard from './BrowseCard';

interface BrowseContainerProps {
  items: Item[];
}

const BrowseContainer = ({items,}:BrowseContainerProps) => {
    return (
        <div>

        <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {items.map(item=><BrowseCard key={item?._id} item = {item}></BrowseCard>)}
      

      </div>
           
    </div>
    );
};

export default BrowseContainer;