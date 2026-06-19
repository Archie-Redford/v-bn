import pytest


def test_example():
    assert 1 + 1 == 2


def test_string_operations():
    assert "hello".upper() == "HELLO"
    assert " spaced ".strip() == "spaced"


def test_list_operations():
    assert sorted([3, 1, 2]) == [1, 2, 3]
    assert sum(range(5)) == 10


def test_exception_handling():
    with pytest.raises(ZeroDivisionError):
        1 / 0
