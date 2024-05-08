import { Box, Typography } from '@mui/material'
import React from 'react'
import SinglePostDesbar from '../single-post-desbar/SinglePostDesbar'
import { IoPricetag } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const SinglePostContent = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3  
            }}
        >
            <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginY: 5
            }}
            >
                <Box
                    sx={{
                        height: 500,
                        width:{
                            xs: '100vw',
                            sm: 600,
                        },
                        backgroundImage: 'url(src/assets/abigail-keenan-_h_weGa3eGo-unsplash.jpg)',
                        backgroundPosition: 'center',
                        borderRadius: 10,
                        backgroundSize: 'cover',
                    }}
                ></Box>
                <SinglePostDesbar
                sx={{
                    position: 'absolute',
                    top: 470
                }}
                ></SinglePostDesbar>
            </Box>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni impedit laudantium consequuntur natus ipsam dignissimos ut cupiditate. Ratione praesentium doloribus tempore dignissimos amet aut voluptatum quia aperiam officia harum ipsam commodi animi dolorum iure ut labore porro blanditiis quae, et laboriosam mollitia ipsa consequuntur. Possimus, est soluta. Debitis quis quasi adipisci ipsa a magni minus sit? Veniam at quae adipisci accusantium. Aperiam voluptas accusamus consequatur quo, rerum consequuntur vel dolorem fugiat ratione voluptatum est incidunt magnam? Possimus iusto quidem sint, earum obcaecati eum unde corporis quisquam debitis dicta, voluptates enim adipisci nobis sunt sed tempore fugiat dolorem. Tempore, repudiandae?
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <IoPricetag
                    color='red'
                ></IoPricetag>
                <Typography
                    color='orange'
                >
                    Education
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: 3
                }}
            >
                <FaFacebook fontSize={30} color='red'></FaFacebook>
                <AiFillTwitterCircle fontSize={30} color='red'></AiFillTwitterCircle>
                <RiInstagramFill fontSize={30} color='red'></RiInstagramFill>
            </Box>
        </Box>
    )
}

export default SinglePostContent
