import Button from '@mui/material/Button';
export const ReusableButton = ({variant, value, className, sx, onClick, name}) =>{
    return (
        <>
        <Button name={name} className={className} sx={sx} variant={variant} onClick={onClick}>{value}</Button>
        </>
    )
}