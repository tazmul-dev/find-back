
import { deletPost, myPost } from '@/lib/api';
import ManagePostsTable from './ManagePostsTable';
import { string } from 'better-auth';
import { getUserSession } from '@/lib/core';

const managePostpage = async() => {
    const user = await getUserSession()
    const email = user?.email
    const myposts = await myPost(email)
    console.log('myposts',myposts)
    return (
        <div>
            <ManagePostsTable posts ={myposts} postDelet = {deletPost}></ManagePostsTable>
        </div>
    );
};

export default managePostpage;