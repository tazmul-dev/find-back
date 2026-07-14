import BrowseContainer from '@/component/browseItem/BrowseContainer';
import { browseData } from '@/lib/browsData';
import { Item } from '@/lib/tsType';


const browsePage = async() => {
 const browsItems = await browseData()
    console.log('browseItems', browsItems)
    return (
        <div>
            
            <BrowseContainer items = {browsItems} ></BrowseContainer>
        </div>
    );
};

export default browsePage;