<?php
/**
 * Created by PhpStorm.
 * User: jon.lowrey
 * Date: 2019-02-11
 * Time: 11:34
 */

function getHFLTotal($licensefee, $latefees){
    $licensefee = doubleval($licensefee);

    $total = 0.00;
    switch ($licensefee){
        case 50:  //No Late Fee for 50
            if($latefees == '1'){}
            else if($latefees =='2'){}
            break;
        case 75:
            if($latefees == '1'){$total += 37.50;}
            else if($latefees =='2'){$total += 50;}
            break;
        case 125:
            if($latefees == '1'){$total += 25;}
            else if($latefees =='2'){$total += 50;}
            break;
        case 225:
            if($latefees == '1'){$total += 25;}
            else if($latefees =='2'){$total += 75;}
            break;
        case 250: //No Late Fee for 250
            if($latefees == '1'){}
            else if($latefees =='2'){}
            break;
        case 275:
            if($latefees == '1'){$total += 25;}
            else if($latefees =='2'){$total += 75;}
            break;
        case 325:
            if($latefees == '1'){$total += 25;}
            else if($latefees =='2'){$total += 75;}
            break;
        case 335:
            if($latefees == '1'){$total += 40;}
            else if($latefees =='2'){$total += 90;}
            break;
        default:
            echo "Fee Not Found";
            return 0;

    }

    return $total + $licensefee;
}

