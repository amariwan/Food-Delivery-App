# Endpoints

Server exposes the following Enpoints:

-   **POST** - `/auth/register` - Register a new user

    -   **name** - _Request Body encrypted string_ -- First name
    -   **lastname** - _Request Body encrypted string_ -- Last name
    -   **username** - _Request Body encrypted string_ -- Username
    -   **email** - _Request Body encrypted string_ -- Email
    -   **password** - _Request Body encrypted string_ -- Password

-   **POST** - `/auth/login` - Login user

    -   **email** - _Request Body encrypted string_ -- Email or Username of User
    -   **password** - _Request Body encrypted string_ -- Password

-   **POST** - `/auth/forgetpassword` - forgetPassword

    -   **email** - _Request Body encrypted string_ -- Email of User

-   **GET** - `/auth/forgetpassword/:token` - forgetpassword

    -   **token** - _Query Attribute string_ -- Token to verify

-   **POST** - `/auth/forgetpassword/:token` - forgetpassword

    -   **password** - _Request Body encrypted string_ -- Password
    -   **token** - _Request Body encrypted string_ -- Token to verify

-   **GET** - `/auth/logout` - Logout user

-   **GET** - `/users/get` - Gets all Data of User

    -   **UserID** - _Query Attribute integer_ -- ID of the User

-   **PATCH** - `/users/updateRole` - Updates role of User

    -   **UserID** - _Request Body encrypted integer_ -- ID of the User
    -   **role** - _Request Body encrypted string_ -- new role of the User

-   **GET** - `/users/list` - Lists username, name, lastname, email and role of all Users

-   **DELETE** - `/users/delete` - Deletes Film

    -   **UserID** - _Request Body encrypted string_ -- ID of the User

-   **POST** - `/users/changePassword` - Change Password of the User

    -   **UserID** - _Request Body encrypted integer_ -- ID of the User
    -   **password** - _Request Body encrypted string_ -- Password

-   **GET** - `/sensor/getData` - Streams File if it is Streamable

    -   **FileID** - _Query Attribute integer_ -- ID of the File
    -   **range** - _HTTP Header_ -- Data Range automatically set by Player

-   **GET** - `/files/download` - Downloads File

    -   **FileID** - _Query Attribute integer_ -- ID of the File

-   **POST** - `/files/upload` - Uploads File

    -   **FilmID** - _Request Body encrypted string_ -- ID of the Film
    -   **File** - _Multipart/Form-Data File_ -- see
        https://stackoverflow.com/questions/35722093/send-multipart-form-data-files-with-angular-using-http

-   **GET** - `/films/get` - Lists/Searches Film

    -   **filmQuery** - _Query Attribute string_ -- Optional search string

-   **GET** - `/films/listFiles` - Lists Files assosiated with Film

    -   **FilmID** - _Query Attribute integer_ -- ID of the Film

-   **DELETE** - `/films/delete` - Deletes Film

    -   **FilmID** - _Request Body encrypted string_ -- ID of the Film

-   **POST** - `/films/create` - Creates Film

    -   **Filmtitel** - _Request Body encrypted string_ -- Required
    -   **Status** - _Request Body encrypted string_ -- Required
    -   **Lehrjahr** - _Request Body encrypted integer_ -- Required
    -   **Stichworte** - _Request Body encrypted string_ -- Required
    -   **Prüfstück** - _Request Body encrypted 1 or 0_ -- Required
    -   **Programmtyp** - _Request Body encrypted string_ -- Required
    -   **Erzählsatz** - _Request Body encrypted string_ -- Required
    -   **Upload** - _Request Body encrypted date_ -- Required
    -   **Erstellungsdatum** - _Request Body encrypted date_ -- Required
    -   **Mitwirkende** - _Request Body encrypted string_ -- Required
    -   **Erscheinungsdatum** - _Request Body encrypted date_ -- Required
    -   **Tonformat** - _Request Body encrypted string_ -- Optional
    -   **Bildformat** - _Request Body encrypted string_ -- Optional
    -   **Bildfrequenz** - _Request Body encrypted string_ -- Optional
    -   **Farbtiefe** - _Request Body encrypted string_ -- Optional
    -   **Videocontainer** - _Request Body encrypted string_ -- Optional
    -   **Tonspurbelegung** - _Request Body encrypted string_ -- Optional
    -   **Timecode_Anfang** - _Request Body encrypted string_ -- Optional
    -   **Timecode_Ende** - _Request Body encrypted string_ -- Optional
    -   **Dauer** - _Request Body encrypted string_ -- Optional
    -   **Videocodec** - _Request Body encrypted string_ -- Optional
    -   **Auflösung** - _Request Body encrypted string_ -- Optional
    -   **Dauer** - _Request Body encrypted string_ -- Optional
    -   **Vorschaubild** - _Request Body encrypted string_ -- Optional
    -   **Autor** - _Request Body encrypted string_ -- Optional
    -   **Bemerkung** - _Request Body encrypted string_ -- Optional
    -   **Bewertungen** - _Request Body encrypted string_ -- Optional
    -   **Klasse** - _Request Body encrypted string_ -- Optional

-   **PATCH** - `/films/update` - Updates Film, only send attributes are changed

    -   **FilmID** - _Request Body encrypted integer_ -- Required
    -   **Prüfstück** - _Request Body encrypted 1 or 0_ -- Required
    -   **Filmtitel** - _Request Body encrypted string_ -- Optional
    -   **Status** - _Request Body encrypted string_ -- Optional
    -   **Lehrjahr** - _Request Body encrypted integer_ -- Optional
    -   **Stichworte** - _Request Body encrypted string_ -- Optional
    -   **Programmtyp** - _Request Body encrypted string_ -- Optional
    -   **Erzählsatz** - _Request Body encrypted string_ -- Optional
    -   **Upload** - _Request Body encrypted date_ -- Optional
    -   **Erstellungsdatum** - _Request Body encrypted date_ -- Optional
    -   **Mitwirkende** - _Request Body encrypted string_ -- Optional
    -   **Erscheinungsdatum** - _Request Body encrypted date_ -- Optional
    -   **Tonformat** - _Request Body encrypted string_ -- Optional
    -   **Bildformat** - _Request Body encrypted string_ -- Optional
    -   **Bildfrequenz** - _Request Body encrypted string_ -- Optional
    -   **Farbtiefe** - _Request Body encrypted string_ -- Optional
    -   **Videocontainer** - _Request Body encrypted string_ -- Optional
    -   **Tonspurbelegung** - _Request Body encrypted string_ -- Optional
    -   **Timecode_Anfang** - _Request Body encrypted string_ -- Optional
    -   **Timecode_Ende** - _Request Body encrypted string_ -- Optional
    -   **Dauer** - _Request Body encrypted string_ -- Optional
    -   **Videocodec** - _Request Body encrypted string_ -- Optional
    -   **Auflösung** - _Request Body encrypted string_ -- Optional
    -   **Dauer** - _Request Body encrypted string_ -- Optional
    -   **Vorschaubild** - _Request Body encrypted string_ -- Optional
    -   **Autor** - _Request Body encrypted string_ -- Optional
    -   **Bemerkung** - _Request Body encrypted string_ -- Optional
    -   **Bewertungen** - _Request Body encrypted string_ -- Optional
    -   **Klasse** - _Request Body encrypted string_ -- Optional
