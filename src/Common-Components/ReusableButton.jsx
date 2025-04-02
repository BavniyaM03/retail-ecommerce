import Button from '@mui/material/Button';
export const ReusableButton = ({variant, value, className}) =>{
    return (
        <>
        <Button className={className} variant={variant}>{value}</Button>
        </>
    )
}