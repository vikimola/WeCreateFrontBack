import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



export default function ChangeLangButtons(props) {
    return (
           <ButtonGroup variant="outlined" color="primary" size='small'>
                        <Button
                            onClick={() => props.handleLanguageChange('en')}
                            disabled={props.locale === 'en'}

                        >
                            En
                        </Button>
                        <Button
                            onClick={() =>  props.handleLanguageChange('hu')}
                            disabled={props.locale === 'hu'}
                        >
                           Hu
                        </Button>
                        <Button
                            onClick={() =>  props.handleLanguageChange('ro')}
                            disabled={props.locale === 'ro'}
                        >
                            Ro
                        </Button>
                    </ButtonGroup>
    );
}
