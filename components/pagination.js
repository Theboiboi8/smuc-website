import { Pagination, Grid, Container, Radio, Link } from "@nextui-org/react";
import React from "react";

 export const PaginationTest = () => {
    const [selectedColor, setSelectedColor] = React.useState('primary');
    const toPage = () => {
        return (
            <Link href="/">
                Click
            </Link>
        )
    }
    const colors = ['primary', 'secondary', 'success', 'warning', 'error', 'gradient']
    const capitalize = (str) => {
      const lower = str.toLowerCase();
      return str.charAt(0).toUpperCase() + lower.slice(1);
    }

    return(
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Pagination shadow color={selectedColor} total={10} onChange={toPage} />
      </Grid>
      <Grid xs={12}>
        <Radio.Group row size="sm" value={selectedColor} onChange={setSelectedColor}>
          {colors.map((color) => (
            <Radio key={color} value={color} color='primary'>
              {capitalize(color)}
            </Radio>
          ))}
        </Radio.Group>
      </Grid>    
    </Grid.Container>
    )
}