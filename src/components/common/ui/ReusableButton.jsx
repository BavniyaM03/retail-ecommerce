import Button from '@mui/material/Button';
export const ReusableButton = ({variant, value, className, sx, onClick}) =>{
    return (
        <>
        <Button className={className} sx={sx} variant={variant} onClick={onClick}>{value}</Button>
        </>
    )
}