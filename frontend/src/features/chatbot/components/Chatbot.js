import React from "react";
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputBase from '@mui/material/InputBase';
import "features/chatbot/style/ChatStyle.scss"


const StyledMessageRow = styled('div')(({ theme }) => ({
    '&.contact': {
        '& .bubble': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.getContrastText(theme.palette.background.paper),
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            '& .time': {
                marginLeft: 12,
            },
        },
        '&.first-of-group': {
            '& .bubble': {
                borderTopLeftRadius: 20,
            },
        },
        '&.last-of-group': {
            '& .bubble': {
                borderBottomLeftRadius: 20,
            },
        },
    },
    '&.me': {
        paddingLeft: 40,

        '& .avatar': {
            order: 2,
            margin: '0 0 0 16px',
        },
        '& .bubble': {
            marginLeft: 'auto',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            '& .time': {
                justifyContent: 'flex-end',
                right: 0,
                marginRight: 12,
            },
        },
        '&.first-of-group': {
            '& .bubble': {
                borderTopRightRadius: 20,
            },
        },

        '&.last-of-group': {
            '& .bubble': {
                borderBottomRightRadius: 20,
            },
        },
    },
    '&.contact + .me, &.me + .contact': {
        paddingTop: 20,
        marginTop: 20,
    },
    '&.first-of-group': {
        '& .bubble': {
            borderTopLeftRadius: 20,
            paddingTop: 13,
        },
    },
    '&.last-of-group': {
        '& .bubble': {
            borderBottomLeftRadius: 20,
            paddingBottom: 13,
            '& .time': {
                display: 'flex',
            },
        },
    },
}));
export default function Chatbot() {
    const some = () => {
        var x = document.getElementById("chatbot");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    };
    function scrollToBottom() {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
    const chatRef = useRef({});
    return (
        <>
            <button onClick={() => some()}> <img class="pulsate-bck" style={{ marginLeft: "159px", width: '30%', cursor: "pointer" }}
                src={require("features/common/images/chatbot.png").default} /></button>
            <div
                className="chatbotTxT"
                id="chatbot"
                style={{
                    display: "none",
                    float:"left"
                }}>
                
            <div className={clsx('flex flex-col relative')}>
                {/* <FuseScrollbars  className="flex flex-1 flex-col overflow-y-auto"> */}
                <div className="flex flex-col pt-16 px-16 ltr:pl-56 rtl:pr-56 pb-40">
                    <StyledMessageRow>
                        <Avatar className="avatar absolute ltr:left-0 rtl:right-0 m-0 -mx-32" />
                        <div className="bubble flex relative items-center justify-center p-12 max-w-full shadow">
                            <Typography
                                className="time absolute hidden w-full text-11 mt-8 -mb-24 ltr:left-0 rtl:right-0 bottom-0 whitespace-nowrap"
                                color="textSecondary"
                            >
                            </Typography>
                        </div>
                    </StyledMessageRow>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col flex-1 items-center justify-center">
                        <Icon className="text-128" color="disabled">
                            chat
                        </Icon>
                    </div>
                    <Typography className="px-16 pb-24 text-center" color="textSecondary">
                        Start a conversation by typing your message below.
                    </Typography>
                </div>
                {/* </FuseScrollbars> */}
                <form className="absolute bottom-0 right-0 left-0 py-16 px-8">
                    <Paper className="flex items-center relative rounded-24 shadow">
                        <InputBase
                            autoFocus={false}
                            id="message-input"
                            className="flex-1 flex flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8"
                            placeholder="Type your message"
                        />
                        <IconButton
                            className="absolute ltr:right-0 rtl:left-0 top-0"
                            type="submit"
                            size="large"
                        >
                            <Icon className="text-24" color="action">
                                send
                            </Icon>
                        </IconButton>
                    </Paper>
                </form>
            </div>
            </div>
        </>
    );

}
