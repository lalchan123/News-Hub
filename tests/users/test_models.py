import pytest


def test_user_str(base_user):
    """Test the custom user model string representation"""
    assert base_user.__str__() == f"{base_user.username}"


def test_user_full_name(base_user):
    """Test that the user models get_full_name method works"""
    full_name = f"{base_user.first_name} {base_user.last_name}"
    assert base_user.get_full_name == full_name


def test_user_short_name(base_user):
    """Test that the user models get_short_name method works"""
    short_name = f"{base_user.username}"
    assert base_user.get_short_name() == short_name


def test_base_user_email_is_normalized(base_user):
    """Test that a new users email is normalized"""
    email = "johnDOE@gmail.com"
    assert base_user.email == email.lower()


def test_super_user_email_is_normalized(super_user):
    """Test that an admin users email is normalized"""
    email = "johnDOE@gmaIL.com"
    assert super_user.email == email.lower()


def test_create_user_with_no_email(user_factory):
    """Test that creating a new user with no email address raises an error"""

    with pytest.raises(ValueError) as err:
        user_factory.create(email=None)
    #print("ERR", err.value) 
    assert str(err.value) == "You must provide an email address"


def test_create_use_with_no_username(user_factory):
    """Test that creating a new user with no username raises an error"""
    with pytest.raises(ValueError) as err:
        user_factory.create(username=None)
    assert str(err.value) == "You must submit a username"


def test_create_user_with_no_firstname(user_factory):
    """Test creating a new user without a firstname raises an error"""
    with pytest.raises(ValueError) as err:
        user_factory.create(first_name=None)
    assert "You must submit" in str(err.value)


def test_create_user_with_no_lastname(user_factory):
    """Test creating a new user without a lastname raises an error"""
    with pytest.raises(ValueError) as err:
        user_factory.create(last_name=None)
    assert str(err.value) == "You must submit last name"


def test_create_superuser_with_no_email(user_factory):
    """Test creating a superuser without an email address raises an error"""
    with pytest.raises(ValueError) as err:
        user_factory.create(email=None, is_superuser=True, is_staff=True)
    assert str(err.value) == "Admin must provide an email address"


def test_create_superuser_with_no_password(user_factory):
    """Test creating a superuser without a password raises an error"""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=True, is_staff=True, password=None)
    assert str(err.value) == "Superuser must have a password"

