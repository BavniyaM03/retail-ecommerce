import Button from '@mui/material/Button';
export const ReusableButton = ({variant, value, className, sx}) =>{
    return (
        <>
        <Button className={className} sx={sx} variant={variant}>{value}</Button>
        </>
    )
}