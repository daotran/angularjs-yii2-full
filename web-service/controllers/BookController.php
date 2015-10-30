<?php
namespace app\controllers;

use yii\rest\ActiveController;

class BookController extends ActiveController
{
    // By specifying modelClass as app\models\Book, the controller knows which model can be used for fetching and manipulating data
    public $modelClass = 'app\models\Book';
    
    public function behaviors()
    {
        // We're adding CORS behavior in order to grant access to third party code (AJAX calls from external domain).
        return \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
            'corsFilter' => [
                'class' => \yii\filters\Cors::className(),
            ],
        ]);
    }
}