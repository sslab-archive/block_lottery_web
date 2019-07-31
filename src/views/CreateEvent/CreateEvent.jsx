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
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/Switch/Switch";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from "../../components/CustomButtons/Button";
import PropTypes from "prop-types";

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
                                            labelText="추첨이름 *"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <InputLabel className={classes.selectLabel}>추첨 랜덤 생성 방법</InputLabel>
                                        <Select value={"Ten"} className={classes.select}
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'age-simple',
                                                }}>
                                            <MenuItem value={"Ten"}>비트코인 해쉬값 기반</MenuItem>
                                            <MenuItem value={"Twenty"}>사용자 참여 기반</MenuItem>
                                        </Select>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            inputType="number"
                                            labelText="최대 참여자 수 ( 0 = 무제한 )"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <InputLabel className={classes.selectLabel}>추첨 마감일</InputLabel>
                                        <TextField
                                            className={classes.select}
                                            type="date"
                                            id="company-disabled"
                                        />
                                    </GridItem>
                                    <GridItem xs={12} md={4}>
                                        <FormControlLabel
                                            style={{marginTop: "27px"}}
                                            control={
                                                <Switch
                                                    checked={true}
                                                    value="조기 마감 가능"
                                                    color="primary"
                                                />
                                            }
                                            label="조기 마감 가능"
                                        />
                                    </GridItem>
                                    <GridItem xs={12} md={4}>
                                        <FormControlLabel
                                            style={{marginTop: "27px"}}
                                            control={
                                                <Switch
                                                    checked={true}
                                                    value="조기 마감 가능"
                                                    color="primary"
                                                />
                                            }
                                            label="사용자 데이터 암호화"
                                        />
                                    </GridItem>
                                    <GridItem xs={12} md={4}>
                                        <FormControlLabel
                                            style={{marginTop: "27px"}}
                                            control={
                                                <Switch
                                                    checked={true}
                                                    value="조기 마감 가능"
                                                    color="primary"
                                                />
                                            }
                                            label="당첨자 전체 공개"
                                        />
                                    </GridItem>
                                    <GridItem xs={12} style={{marginTop: "27px"}}>
                                        추첨 항목 *
                                    </GridItem>
                                    <GridItem xs={6}>
                                        <CustomInput
                                            style={{marginTop: "0px"}}
                                            inputType="text"
                                            labelText="항목"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={5}>
                                        <CustomInput
                                            inputType="number"
                                            labelText="당첨자 수"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={1}>
                                        <IconButton style={{marginTop: "27px"}}>
                                            <AddIcon color={"primary"}/>
                                        </IconButton>
                                    </GridItem>
                                    <GridItem xs={6}>
                                        <CustomInput
                                            style={{marginTop: "0px"}}
                                            inputType="text"
                                            labelText="항목"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={5}>
                                        <CustomInput
                                            inputType="number"
                                            labelText="당첨자 수"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={1}/>
                                    <GridItem xs={4}/>
                                    <GridItem xs={4}>
                                        <Button color={"primary"}>추첨 생성 </Button>
                                    </GridItem>
                                    <GridItem xs={4}/>


                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

CreateEvent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(EventListStyle)(CreateEvent)