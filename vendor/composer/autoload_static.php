<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbfc61e7adde4c02d36908f14e78e0f0f
{
    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Katell\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Katell\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Katell\\Controller\\Connect' => __DIR__ . '/../..' . '/src/controller/Connect.php',
        'Katell\\Controller\\Contact' => __DIR__ . '/../..' . '/src/controller/Contact.php',
        'Katell\\Controller\\HomeSearch' => __DIR__ . '/../..' . '/src/controller/HomeSearch.php',
        'Katell\\Controller\\Info' => __DIR__ . '/../..' . '/src/controller/Info.php',
        'Katell\\Helpers\\View' => __DIR__ . '/../..' . '/src/helpers/View.php',
        'Katell\\Model\\Manager' => __DIR__ . '/../..' . '/src/model/Manager.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbfc61e7adde4c02d36908f14e78e0f0f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbfc61e7adde4c02d36908f14e78e0f0f::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitbfc61e7adde4c02d36908f14e78e0f0f::$classMap;

        }, null, ClassLoader::class);
    }
}
