import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import  CardOverflow  from "@mui/joy/CardOverflow";
import  AspectRatio  from "@mui/joy/AspectRatio";

const activeUsers = [
    { productName: "Martin", memberImage: "img/martin.webp"},
    { productName: "Justin", memberImage: "img/justin.webp"},
    { productName: "Rose", memberImage: "img/rose.webp"},
    { productName: "Nusret", memberImage: "img/nusret.webp"},
]

export default function ActiveUsers() {
    return (
        <div className={"active-users-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Active Users</Box>
                    <Stack className={"cards-frame"}>
                        <CssVarsProvider>
                            {activeUsers.length !== 0 ? (
                                activeUsers.map((ele, index) => {
                                    return (
                                        <Card key={index} variant="outlined" className={"card"}>
                                            <CardOverflow>
                                                <AspectRatio ratio="1">
                                                    <img src={ele.memberImage} alt={ele.productName} />
                                                </AspectRatio>
                                            </CardOverflow>
                                            <CardOverflow variant="soft" className="member-nick">
                                                <Stack className="info">
                                                    <Stack flexDirection={"row"}>
                                                        <Typography className={"title"}>
                                                            {ele.productName}
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </CardOverflow>
                                        </Card>
                                    );
                                })
                            ) : (
                                <Typography>No active users available</Typography>
                            )}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}
