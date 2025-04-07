import { TextField } from "@mui/material"
export const ReusableTextField = ({name, label, type, variant }) => {
    return (
        <>
            <TextField
                required
                name={name}
                label={label}
                type={type}
                fullWidth
                variant={variant}
            />
        </>
    )
}