import React from 'react';

import { Card, Link, Chip } from "@heroui/react";
import Image from 'next/image';
import { Item } from '@/lib/tsType';

interface BrowseCardProps {
  item: Item;
}


const BrowseCard = ({item}:BrowseCardProps) => {
 return (
    <Card className="border border-zinc-200 shadow-sm rounded-2xl overflow-hidden bg-white">
      
      {/* --- Image & Status Badge Section --- */}
      <div className="relative w-full h-[260px]">
        <Image
          alt={item?.title}
          className="object-cover w-full h-full rounded-none"
          src={item?.image}
          height={100}
          width={100}
         
        />
        <Chip
          className="absolute top-3 left-3 z-10 bg-[#FF2D2D] text-white font-bold border-none"
          size="sm"
          
        >
          {item?.status}
        </Chip>
      </div>

      {/* --- Card Content --- */}
      <Card.Header className="px-5 pt-4 pb-2 flex flex-col items-start gap-1">
        {/* Category */}
        <p className="text-[#F97316] text-sm font-semibold">
          {item?.category}
        </p>
        
        {/* Title */}
        <Card.Title className="text-[22px] leading-tight font-bold text-[#0F172A]">
          {item?.title}
        </Card.Title>
        
        {/* Description (Location & Date) */}
        <div className="w-full mt-2 flex flex-col gap-2 text-[#64748B] text-sm font-medium">
  <div className="flex items-center gap-2">
    <span>{item.location}</span>
  </div>

  <div className="flex items-center gap-2">
    <span>{item.date}</span>
  </div>
</div>
      </Card.Header>

      {/* --- Action Footer --- */}
      <Card.Footer className="px-5 pb-5 pt-2">
        <Link
          className="w-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold text-base rounded-xl py-3 justify-center text-center no-underline hover:no-underline"
          href={'/'}
        >
          View Details
        </Link>
      </Card.Footer>
      
    </Card>
  );
};

export default BrowseCard;