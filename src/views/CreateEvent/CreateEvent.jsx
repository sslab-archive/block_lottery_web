import React from "react";
import {withStyles} from "@material-ui/core";


import EventListStyle from "assets/jss/material-dashboard-react/views/EventListStyle.jsx";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CustomInput from "../../components/CustomInput/CustomInput";
import TextField from "@material-ui/core/TextField/TextField";

class CreateEvent extends React.Component {
    render() {
        const {classes} = this.props;
        const seedType = [
            {
                value: '방법1',
                label: '$',
            },
            {
                value: 'EUR',
                label: '€',
            },
            {
                value: 'BTC',
                label: '฿',
            },
            {
                value: 'JPY',
                label: '¥',
            },
        ];
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>새 추첨 이벤트 생성하기</h4>
                                <p className={classes.cardCategoryWhite}>아래 항목을 채워주세요 ( * 표시는 필수 항목 입니다 )</p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Company (disabled)"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <TextField
                                            id="standard-select-currency"
                                            select
                                            label="Select"
                                            value="여기서"
                                            // onChange={handleChange('currency')}
                                            SelectProps={{
                                                MenuProps: {
                                                    className: classes.menu,
                                                },
                                            }}
                                            helperText="Please select your currency"
                                            margin="normal"
                                        >
                                            <option key="방식1" value="방식1">
                                                "방식1"
                                            </option>
                                            <option key="방식2" value="방식2">
                                                "방식2"
                                            </option>
                                        </TextField>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Company (disabled)"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Company (disabled)"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
    )
    }
    }

    export default withStyles(EventListStyle)(CreateEvent)