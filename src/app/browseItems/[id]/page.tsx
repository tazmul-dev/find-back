import React from 'react';
import DetailsHero from './DetailsHero';
import { detalsPage } from '@/lib/api';
type PageProps = {
  params: {
    id: string;
  };
};
const detaisPage = async({params}:PageProps) => {
   const {id} = await params
   console.log(id, 'id')
   const data = await detalsPage(id)
   console.log('data',data)
    return (
        <div>
            <DetailsHero item = {data}></DetailsHero>
        </div>
    );
};

export default detaisPage;