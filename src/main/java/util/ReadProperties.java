package util;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

public class ReadProperties {


    public static String getProperty(String propertyName) {

        Properties prop = null;

        try {

            InputStream input = new FileInputStream("config.properties");

            prop = new Properties();

            // load a properties file
            prop.load(input);

        }catch (Exception e){
            e.printStackTrace();
        }
        return prop.getProperty(propertyName);

    }


}
