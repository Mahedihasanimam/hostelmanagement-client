import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosCommon } from './UseAxiosCommon';

const UseLike = () => {
    const {data:totallike=[],refetch:likerefetch}=useQuery({
        queryKey:['totallike'],
        queryFn:async()=>{
            const {data}=await axiosCommon('/like')
            return data
        }
    })

    return [totallike,likerefetch]
};

export default UseLike;