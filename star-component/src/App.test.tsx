import { fireEvent, render, screen } from '@testing-library/react';
import StarComponent from './components/StarComponent';
test('should render the component', () => { 
    let max=10,min=5;
    let st= Math.floor(Math.random() * (max - min + 1) + min)
    render(<StarComponent starCount={st}/>);
    const stars = screen.getAllByRole('star');

    expect(stars).toHaveLength(st);

    fireEvent.mouseEnter(stars[1]);

    expect(stars[0]?.className).toContain('golden');
    expect(stars[1]?.className).toContain('golden');
    expect(stars[2]?.className).not.toContain('golden');

    fireEvent.mouseLeave(stars[1]);
    expect(stars[0]?.className).not.toContain('golden');
    expect(stars[1]?.className).not.toContain('golden');
    
    fireEvent.click(stars[2]);

    expect(stars[0]?.className).toContain('golden');
    expect(stars[1]?.className).toContain('golden');
    expect(stars[2]?.className).toContain('golden');
    expect(stars[3]?.className).not.toContain('golden');
    expect(stars[4]?.className).not.toContain('golden');
    

 })