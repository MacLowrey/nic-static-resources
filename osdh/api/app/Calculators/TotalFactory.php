<?php
/**
 * Created by PhpStorm.
 * User: jon.lowrey
 * Date: 2019-02-11
 * Time: 15:29
 * A factory to generate calculators
 */
include_once("HealthFoodLodging.php");

class TotalFactory
{
    private $iniFile;
    public function __construct()
    {
        $this->iniFile = parse_ini_file('AppIDMap.ini');

    }

    function factoryMethod($getvars){
        if($this->iniFile[$getvars['appid']]) {
            $calculator = new $this->iniFile[$getvars['appid']]();
            return $calculator;
        }
        else{
            return new InvalidAppID();
        }
    }
}