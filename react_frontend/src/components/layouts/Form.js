/*
import React from 'react'
import { Field } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/core';

const validate = values => {
    const errors = {}
    const requiredFields = [
        'header',
        'favoriteColor',
        'notes',
        'setSelectedDate'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    return errors
}

const renderTextField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

const renderCheckbox = ({ input, label }) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                />
            }
            label={label}
        />
    </div>
)

const radioButton = ({ input, ...rest }) => (
    <FormControl>
        <RadioGroup {...input} {...rest}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
    </FormControl>
)

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}

const renderSelectField = ({
                               input,
                               label,
                               meta: { touched, error },
                               children,
                               ...custom
                           }) => (
    <FormControl error={touched && error}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
            native
            {...input}
            {...custom}
            inputProps={{
                name: 'age',
                id: 'age-native-simple'
            }}
        >
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
    </FormControl>
)

const MaterialUiForm = props => {
    const { handleSubmit, pristine, reset, submitting, classes } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="firstName"
                    component={renderTextField}
                    label="First Name"
                />

            </div>
            <div>
                <Field name="lastName" component={renderTextField} label="Last Name" />
            </div>
            <div>
                <Field name="email" component={renderTextField} label="Email" />
            </div>
            <div>
                <Field name="employed" component={renderCheckbox} label="Employed" />
            </div>
            <div />
            <div>
                <Field
                    name="notes"
                    component={renderTextField}
                    label="Notes"
                    multiline
                    rowsMax="4"
                    margin="normal"
                />
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'MaterialUiForm', // a unique identifier for this form
    validate,
})(MaterialUiForm)
*/