import { TextField } from "@mui/material"
export const ReusableTextField = ({ name, label, type, variant, onChange, helperText }) => {
    return (
        <>
            <TextField
                onChange={onChange }
                required
                name={name}
                label={label}
                type={type}
                fullWidth
                variant={variant}
                helperText={helperText}
            />
        </>
    )
}